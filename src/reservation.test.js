import { initializeTimes, updateTimes }  from './pages/Reservation'

describe('initializeTimes', () => {
    test('should return the correct initial times', () => {
      const expectedTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
      expect(initializeTimes()).toEqual(expectedTimes);
    });
  });
  
  describe('updateTimes', () => {
    test('should return the same value that is provided in the state', () => {
      const state = ['09:00', '10:00'];
      const action = { type: 'UPDATE_TIMES', date: '2023-01-01' };
      expect(updateTimes(state, action)).toEqual(initializeTimes());
    });
  });