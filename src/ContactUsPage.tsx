import * as React from "react";
import ContactUs from "./ContactUs";
import { ISubmitResult, IValues } from "./Form";

// declaring a state type for this container component to store the state
interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
  urgency: number;
}

const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

class ContactUsPage extends React.Component<{}, {}> {
  private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    await wait(1000); // simulate asynch web api call
    return {
      // errors: {
      //   email: ["Something is wrong with this"]
      // },
      success: true
    };
  };

  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ContactUsPage;
