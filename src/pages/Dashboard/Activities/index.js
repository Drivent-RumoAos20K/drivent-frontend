import ActivitiesChoose from '../../../components/ActivitiesChoose';
import { Cont } from '../Hotel';

export default function Activities() {
  const daySchedule = [
    {
      day: 'Sexta, 22/10',
      place: 'Auditório Principal',
      activities: [
        {
          title: 'Minecraft: montando o PC ideal',
          interval: '09:00 - 10:00',
          intervalValue: 1,
          vacancies: 27
        },
        {
          title: 'Lol: montando o PC ideal',
          interval: '10:00 - 11:00',
          intervalValue: 1,
          vacancies: 0
        },
        {
          title: 'Lol: montando o PC ideal',
          interval: '10:00 - 11:00',
          intervalValue: 1,
          vacancies: 0
        },
      ]
    },
    {
      day: 'Sexta, 22/10',
      place: 'Audotório Lateral',
      activities: [
        {
          title: 'Palestra x',
          interval: '09:00 - 11:00',
          intervalValue: 2,
          vacancies: 27
        }
      ]
    },
    {
      day: 'Sexta, 22/10',
      place: 'Sala de Workshop',
      activities: [
        {
          title: 'Palestra y',
          interval: '09:00 - 10:00',
          intervalValue: 1,
          vacancies: 27
        },
        {
          title: 'Palestra z',
          interval: '10:00 - 11:00',
          intervalValue: 1,
          vacancies: 0
        },
      ]
    }
  ];

  return (
    <Cont>
      <ActivitiesChoose daySchedule={daySchedule}/>
    </Cont>
  );
}
