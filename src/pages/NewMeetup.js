import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory(); // navigate way

    function addMeetUpHandler(meetupData) {
        // firebase requires the .json - send post request to firebase
        fetch(
            'https://react-meetup-ffb86-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData), // convert JS object to JSON
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => { // once content is added, navigate to the home page
            history.replace('/');
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetUpHandler} />
        </section>
    )
}

export default NewMeetupPage;