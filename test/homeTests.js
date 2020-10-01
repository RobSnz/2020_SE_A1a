const assert = require('chai').assert;
const HomeFunctions = require('../src/Home/HomeFunctions.js');

describe('Home Tests', function(){
    const stubValues = {
        constraints: [{ field: 'testField', operator: 'testOperator', value: 23, id: 1 }]
    };

    describe('addConstraint()', function(){
        it('constraints should contain item with id = 2.', function(){
            stubValues.constraints = HomeFunctions.addConstraint(stubValues.constraints, { field: 'testField2', operator: 'equal to', value: 26, id:2});
            assert.exists(stubValues.constraints.find(item => item.id == 2));
        });

        it('constraint with no field should not be added.', function(){
            const constraints = HomeFunctions.addConstraint(stubValues.constraints, { field: 'Select...', operator: 'equal to', value: 50, id:3});
            assert.isNull(constraints);
        });
    }),

    describe('removeConstraint()', function(){
        it('constraints should NOT contain item with id = 1.', function(){
            stubValues.constraints = HomeFunctions.removeConstraint(stubValues.constraints, stubValues.constraints.find(item => item.id == 1).id);
            assert.notExists(stubValues.constraints.find(item => item.id == 1));
        });
    });
});