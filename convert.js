var studentsIn = require('./data.json');
var studentsOut = {
	r180: {},
	wa: {}
};
for(var studentId in studentsIn) {
	// studentsIn[studentId].name = studentId;
	var student = studentsIn[studentId];
	// console.log(studentId);
	for(var skillId in student) {
		var skill = student[skillId];
		if(skill.r180) {
			transform('r180', studentId, skillId);
		}
		if(skill.wa) {
			transform('wa', studentId, skillId);
		}
	}
}
// var r180Model = objectToArray('r180', studentsOut);
// console.log(JSON.stringify(studentsIn));
console.log(JSON.stringify(studentsOut['r180']));
// visit(studentsOut);

function objectToArray(product, data) {
	var students = data[product];
	for(var studentId in students) {
		var student = students[studentId];
		
	}
}

function visit(studentsOut) {
	console.log(studentsOut);
	for(var product in studentsOut) {
		console.log(product);
		var students = studentsOut[product];
		for(var studentId in students) {
			var student = students[studentId];
			console.log('\t' + studentId)
			// for(var strategyName in student) {
			// 	console.log('\t' + strategyName);
			// 	var skills = student[strategyName];
			// 	for(var skillId in skills)
			// }
		}
	}
}
function transform(product, studentId, skillId) {
	var studentIn    = studentsIn[studentId];
	var skillIn      = studentIn[skillId];
	var strategyName = skillIn.strategyName;
	var skillName    = skillIn.skillName;

	// if there is no student
	var studentOut = studentsOut[product][studentId];
	if(!studentOut) {
		// create an empty student
		studentsOut[product][studentId] = {
			// label: studentId,
			// value: 0,
			// children: []
		};
	}
	// if student does not have the strategy
	var strategyOut = studentsOut[product][studentId][strategyName];
	if(!strategyOut) {
		// create an empty strategy
		studentsOut[product][studentId][strategyName] = {
			// label: strategyName,
			// value: 0,
			// children: []
		};
	}
	var skillOut = studentsOut[product][studentId][strategyName][skillName];
	if(!skillOut) {
		// skillIn['label'] = skillIn.skillName;
		// skillIn['value'] = skillIn[product].correct;
		// skillIn['children'] = [];
		studentsOut[product][studentId][strategyName][skillName] = skillIn;
	}
	// studentsOut[product][studentId][strategyName][skillId].value += skillIn[product].correct;
}