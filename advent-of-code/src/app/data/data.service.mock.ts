import { DataService } from './data.service';

export class DataServiceMock {
  static instance(): jasmine.SpyObj<DataService> {
    const instance = jasmine.createSpyObj<DataService>('DataService', [
      'getChallengeOneData',
      'getChallengeTwoData',
      'getChallengeThreeData',
      'getChallengeFourData',
      'getChallengeFourDataBingoNumbers',
    ]);

    instance.getChallengeOneData.and.returnValue(Promise.resolve([]));
    instance.getChallengeTwoData.and.returnValue(Promise.resolve([]));
    instance.getChallengeThreeData.and.returnValue(Promise.resolve([]));
    instance.getChallengeFourData.and.returnValue(Promise.resolve([]));
    instance.getChallengeFourDataBingoNumbers.and.returnValue(
      Promise.resolve([])
    );

    return instance;
  }
}
