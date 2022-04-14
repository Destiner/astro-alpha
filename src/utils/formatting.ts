import { DateTime } from 'luxon';

export default function formatDate(date: string): string {
  return DateTime.fromISO(date).toFormat('d LLLL yyyy');
}
