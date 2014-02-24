define([
    'backbone',
    'models/score'
], function(
    Backbone,
    Score
){

    var Collection = Backbone.Collection.extend({
	    model: Score,
	    initialize: function(){
	    	this.models = [
	            new Score({
	            	name:'name1',
	            	score: 10
	            }),
	            new Score({
	            	name:'name2',
	            	score: 9
	            }),
	            new Score({
	            	name:'name3',
	            	score: 8
	            }),
	            new Score({
	            	name:'name4',
	            	score: 7
	            }),
	            new Score({
	            	name:'name5',
	            	score: 6
	            }),
	            new Score({
	            	name:'name6',
	            	score: 5
	            }),
	            new Score({
	            	name:'name7',
	            	score: 4
	            }),
	            new Score({
	            	name:'name8',
	            	score: 3
	            }),
	            new Score({
	            	name:'name9',
	            	score: 2
	            }),
	            new Score({
	            	name:'name10',
	            	score: 1
	            })
	    	];
	    }

    });

    return new Collection();
});