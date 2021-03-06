import Breakouts from '/imports/api/1.1/breakouts';
import Logger from '/imports/startup/server/logger';
import { check } from 'meteor/check';
import addBreakout from '../modifiers/addBreakout';

export default function handleCreateBreakout({ payload }) {
  const { breakoutMeetingId } = payload;

  check(breakoutMeetingId, String);

  return addBreakout(payload);
}
