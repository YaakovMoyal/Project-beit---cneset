import { OwnerOrAdminGuard } from './owner-or-admin.guard';

describe('OwnerOrAdminGuard', () => {
  it('should be defined', () => {
    expect(new OwnerOrAdminGuard()).toBeDefined();
  });
});
