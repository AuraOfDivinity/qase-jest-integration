process.env.QASE_REPORT = './';

module.exports = {
    reporters: [
      'default',
      [
        'jest-qase-reporter',
        {
          apiToken: 'bfe4276763b5f2d712f30cd68b93348553052c47aa13a34bfd837fbb8e27346b',
          projectCode: 'DEMO',
          environmentId: 1,
          logging: true,
          runComplete: true,
        },
      ],
    ],
  };