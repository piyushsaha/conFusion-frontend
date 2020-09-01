import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap'
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
                    </div>
                </div>
            </div>
        )
    }

}

export default DishDetail