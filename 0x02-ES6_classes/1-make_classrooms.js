import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const cls1 = new ClassRoom(19);
  const cls2 = new ClassRoom(20);
  const cls3 = new ClassRoom(34);
  const arr = [cls1, cls2, cls3];
  return arr;
}
