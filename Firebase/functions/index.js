/* Removal of 'old' data
 * Made w/modifications from Firebase library
 * https://github.com/firebase/functions-samples/blob/master/delete-old-child-nodes/functions/index.js
 */
'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

//Cut off time. Any node older than this will delete
const CUT_OFF_TIME = 1000 * 60 * 60 * 24;
//                   ms/s  s/m  m/h  hrs

exports.deleteOldItems = functions.database.instance('campusfeels-b28b1').ref(`/reacts/{pushId}`).onCreate((change) => {
  const ref = change.ref.parent; // reference to the parent
  const now = Date.now();
  const cutoff = now - CUT_OFF_TIME;
  const oldItemsQuery = ref.orderByChild('time_date').endAt(cutoff);
  return oldItemsQuery.once('value').then((snapshot) => {
    // create a map with all children that need to be removed
    const updates = {};
    snapshot.forEach(child => {
      updates[child.key] = null;
    });
    // execute all updates in one go and return the result to end the function
    return ref.update(updates);
  });
});
