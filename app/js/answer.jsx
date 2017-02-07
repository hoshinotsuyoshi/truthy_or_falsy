'use strict';

var Answer = React.createClass({
  render: function() {
    var classes = classNames({
      'answer': true,
      'answer-correct bg-success': this.props.isAnswerCorrect,
      'answer-incorrect bg-danger': !this.props.isAnswerCorrect
    });
    var name = this.props.question.name;
    var text = this.props.question.text;
    var type = this.props.question.type === IS_BIGDATA ? 'falsy' : 'truthy';

    return (
      <div className={classes}>
        <h1 className="answer-name">
           {name} is {type}!
        </h1>
        <div className="answer-text">{text}</div>
        <div className="answer-next">
          <button className="btn btn-lg btn-primary answer-button-next" onClick={this.props.nextQuestion}>Next question</button>
        </div>
      </div>
    )
  }
});

