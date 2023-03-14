import Activity from './Activity';

export default function Place({ activities }) {
  return (
    <ul>
      {activities.map((a) => 
        <Activity
          title = {a.title}
          interval = {a.interval}
          intervalValue = {a.intervalValue}
          vacancies={a.vacancies}
        />
      )}
    </ul>
  );
};

