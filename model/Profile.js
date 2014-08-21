var mongoose = require('mongoose');

/*
var contactSchema = mongoose.Schema({
	email : String,
	tel : String
});
*/
var professionalHistorySchema = mongoose.Schema({
	company : String,
	jobTitle : String,
	dateStart : String,
	dateEnd : String
});

var professionalExperienceSchema = mongoose.Schema({
	projectName : String,
	//company : String,
	projectDescription : String,
	//dateStart : String,
	//dateEnd : String,
	roles : [{role : String}]
});

var trainingSchema = mongoose.Schema({
	//category :String,
	trainingName : String,
	//type : String,
	//dateStart : String,
	//dateEnd : String,
	year : Number
});

var certificationSchema = mongoose.Schema({
	//category : String,
	certificationName : String,
	//type : String,
	//dateStart : String,
	//dateEnd : String,
	year : Number
});

var educationSchema = mongoose.Schema({
	university : String,
	//major : String,
	yearStart : Number,
	yearEnd : Number,
	degree: String
});

var profileSchema = mongoose.Schema({
	language : String,
	user :  mongoose.Schema.Types.ObjectId,
	firstName : String,
	lastName : String,
	sex : String,
	birthday : Date,
	contacts : {
		email : String,
		tel : String
	},
	summary : String,
	professionalHistories : [professionalHistorySchema],
	professionalExperiences : [professionalExperienceSchema],
	trainings : [trainingSchema],
	certifications : [certificationSchema],
	educations : [educationSchema]
});

var Profile = mongoose.model('Profile', profileSchema, 'profiles');
