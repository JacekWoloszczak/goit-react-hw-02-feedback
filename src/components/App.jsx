import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  onLeaveRating = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const ratings = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={ratings}
            onLeaveFeedback={this.onLeaveRating}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
