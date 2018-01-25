/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	DeleteStudentByname : function (req ,res)
	{
		StudentRecord.destroy({Name : req.body.Name}).exec(function (err , data){
			if(err)
			{
				return res.json({
					status  : 400,
					message : 'error found',
					data : data
				})
			}

			return res.json({
				status : 200,
				message : 'sucessfully record',
				data : data
			})
	});
},
	UpdatedByRollNo : function (req,res)
	{
		let Roll_no = req.body.Roll_no;
    let condition = {
		  Roll_no : Roll_no
		 };
		let upadatedvalue =  {
			Email : req.body.Email,
			Name : req.body.Name,
			Roll_no : req.body.Roll_no,
			Address : req.body.Address,
			Branch : req.body.Branch
          };
		StudentRecord.update(condition, upadatedvalue).exec( function (err, data){
			if(err)
			{
				return res.json({
					status  : 400,
					message : 'error found',
					data : data

				})
			}

			//if(Updatedvaled)
			//{
				return res.json({
					status : 200,
					message : 'sucessfully record',
					data : data
				})

			//else {
				//return res.json ({
					//status :200,
					//message : 'pkz enter the detais',
					//record : record
				//})
			//}
		});
	},
	UpdatedByName : function (req,res)
	{
		let Email = req.body.Email;
    let condition = {
		  Email : Email
		 };
		let upadatedvalue =  {
			Name : req.body.Name,
			Roll_no : req.body.Roll_no,
			Address : req.body.Address,
			Branch : req.body.Branch
          };
		StudentRecord.update(condition, upadatedvalue).exec( function (err, data){
			if(err)
			{
				return res.json({
					status  : 400,
					message : 'error found',
					data : data

				})
			}

			//if(Updatedvaled)
			//{
				return res.json({
					status : 200,
					message : 'sucessfully record',
					data : data
				})

			//else {
				//return res.json ({
					//status :200,
					//message : 'pkz enter the detais',
					//record : record
				//})
			//}
		});
	},
	GetAllStudentsByname : function(req,res) {
		StudentRecord.find({ id :req.param.ID}).exec (function ( err, data){
			if(err)
			{
        return res.json({
					status : 400,
					message :'error find in',
					data : data
				})
			}
			if(data) {
				return res.json({
				status : 200,
				message : 'that is an record successfully',
         data : data
			 })
			}
			else {
				return res.json ({
				status :200,
				message :'plese enter data',
				data : data

		})

		 }

	});
},

	GetAllStudents : function(req,res) {
		StudentRecord.find({ }).exec (function ( err, data){
			if(err)
			{
        return res.json({
					status : 400,
					message :'error find in',
					data : data
								})
			}
			if(data) {
				return res.json({
				status : 200,
				message : 'that is an record successfully',
         data : data
			 })
			}
			else {
				return res.json ({
				status :200,
				message :'plese enter data',
				data : data

		})

		 }

	});
},

	StudentRegistration :  function(req, res) {
		    let name = req.body.Name;
				let roll_no = req.body.Roll_no;
				let branch = req.body.Branch;
				let address = req.body.Address;
				let email = req.body.Email;
         if (name && roll_no && branch && address && email){

        				let StdObj =  {
									 Name : name ,
									 Roll_no : roll_no,
									 Branch : branch,
									 Address : address,
									 Email : email
								 };
								 StudentRecord.create(StdObj).exec(function(err, data){

								if(err)
								 {
									  return res.json({
									 status : 400,
									 message : 'there is error record',
								  data : data
								 })
							 	 }
								 else
								 {
								 return  res.json({
									 status : 200,
									 message : 'details entered sucessfully',
									 data : data
								 })
							 }
						 })
						 }
						 else {

								return res.json({
									status :200,
									message : 'there is successfully submit details',
									data : data
								})
							}

					 }
}
