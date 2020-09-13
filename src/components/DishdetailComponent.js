import React, { Component } from 'react'
import {
    Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label
} from 'reactstrap'
import { LocalForm, Control, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom'

class DishDetail extends Component {
    renderComments(comments) {
        if (comments.length === 0) {
            return (
                <div></div>
            )
        } else {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                            comments.map(comment => {
                                return (
                                    <li className="py-3">
                                        {comment.comment}
                                        <br />
                                        {`--${comment.author}, ${comment.date}`}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu </Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.comments)}
                        <br />
                        <CommentForm />
                    </div>
                </div>
            </div>
        )
    }

}

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => val && (val.length >= len)

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCommentFormOpen: false
        }
        this.toggleCommentForm = this.toggleCommentForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    toggleCommentForm() {
        this.setState({
            isCommentFormOpen: !this.state.isCommentFormOpen
        })
    }
    handleSubmit(values) {
        console.log(JSON.stringify(values))
        alert(JSON.stringify(values))
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleCommentForm}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isCommentFormOpen} toggle={this.toggleCommentForm}>
                    <ModalHeader toggle={this.toggleCommentForm}>Submit Comment</ModalHeader>
                    <ModalBody className="col-10 align-self-center">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                    placeholder="First Name"
                                    className="form-control"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author">Your name</Label>
                                <Control.text
                                    model=".author"
                                    id="author"
                                    name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, maxLength: maxLength(15), minLength: minLength(2)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea
                                    model=".comment"
                                    id="comment"
                                    name="comment"
                                    className="form-control"
                                    rows="8"
                                />
                            </Row>
                            <Row>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default DishDetail