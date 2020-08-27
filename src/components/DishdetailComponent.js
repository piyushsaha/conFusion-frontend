import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'


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
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        )
    }

}

export default DishDetail