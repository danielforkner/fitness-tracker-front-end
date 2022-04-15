import React from 'react';

const AddRoutineActivityForm = ({
  setCount,
  setDuration,
  count,
  duration,
  allActivities,
  selectedActivity,
  setSelectedActivity,
  handleSubmitAddActivity,
}) => {
  return (
    <form>
      <label htmlFor="activities">Activity Name: </label>
      <select
        name="activities"
        value={selectedActivity}
        onChange={(e) => {
          setSelectedActivity(e.target.value);
        }}
      >
        {allActivities.map((activity) => {
          return (
            <option value={activity.id} key={`activityID:${activity.id}`}>
              {`${activity.name}`}
            </option>
          );
        })}
      </select>
      <label htmlFor="count">Count: </label>
      <input
        name="count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      ></input>
      <label htmlFor="duration">Duration: </label>
      <input
        name="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      ></input>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={handleSubmitAddActivity}
      >
        ADD
      </button>
    </form>
  );
};

export default AddRoutineActivityForm;
