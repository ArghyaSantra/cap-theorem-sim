const replicaState = require('../models/replicaState');

exports.simulateWrite = (data, replicationMode, partitionedNodes = []) => {
  const allReplicas = replicaState.replicas;
  const reachableReplicas = allReplicas.filter(r => !partitionedNodes.includes(r));

  if (replicationMode === 'consistency') {
    if (reachableReplicas.length >= 2) {
      return {
        status: 'success',
        mode: 'consistency',
        writtenTo: reachableReplicas
      };
    } else {
      return {
        status: 'fail',
        mode: 'consistency',
        message: 'Write failed due to lack of quorum',
        reachableReplicas
      };
    }
  } else if (replicationMode === 'availability') {
    return {
      status: 'success',
      mode: 'availability',
      writtenTo: reachableReplicas
    };
  } else {
    return {
      status: 'error',
      message: 'Invalid replication mode'
    };
  }
};
