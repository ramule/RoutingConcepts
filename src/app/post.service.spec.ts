import { TestBed } from '@angular/core/testing';

import { FollowersService } from './Services/followers.service';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowersService = TestBed.get(FollowersService);
    expect(service).toBeTruthy();
  });
});
