/*module.exports = {
    addConstraint : function(constraints, item){
        if(item.field === 'Select...' || item.operator === 'Select...'){                        //Returns null if items haven't been selected
            return null;
        }else
            return [...constraints, { field: item.field, operator: item.operator, value: item.value, id: item.id }];        //appends on to current constraint array
    },

    removeConstraint : function(constraints, id){
        return constraints.filter(item => item.id !== id);      //searches for item in constraint that contains unique ID and remove (filters) it out
    }
}*/