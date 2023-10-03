process.env.QASE_REPORT = './';

module.exports = {
    reporters: [
      'default',
      [
        'jest-qase-reporter',
        {
          apiToken: '<api-token>',
          projectCode: '<project-code>',
          environmentId: 1,
          logging: true,
          runComplete: true,
        },
      ],
    ],
  };