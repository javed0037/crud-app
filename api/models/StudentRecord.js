/**
 * StudentRecord.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    NewStudent : {

        Name :{
          type : "string"
        },
        Roll_no : {
          type : "string"
        },
        Branch : {

           type : "string"
        },
        Address : {
        type :"string",
        unique : true
      },
      Email : {
        type : "string",
        unique : true
      },
      ID : {
        unique : true
      }

    }

  }
};
