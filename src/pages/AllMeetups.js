import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
  
  function AllMeetupsPage() {
    // we start in a loading state
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {

      setIsLoading(true);
      // fetch data from firebase 
      fetch('https://react-meetup-ffb86-default-rtdb.firebaseio.com/meetups.json'
      ).then(response => {
        return response.json();
      }).then(data => {
        // after json data, return map out the data
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          // push the data into the meetups array
          meetups.push(meetup)
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
    }, [])

    if (isLoading) {
      return <section>
        <p>Loading...</p>
      </section>
    }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    )
}

export default AllMeetupsPage;