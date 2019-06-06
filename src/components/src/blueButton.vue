<template>
<button class="blueButton" :disabled="disabled" type="button" @click="handleClick" @mouseover="handleHover"><slot /></button>
</template>
<script>
export default {
	name: 'BlueButton',

	props :{

	type : {
	type: String,
	default : 'button'
	},

	disabled : {
	type : Boolean,
	default : false
	}
	},

	methods:{

	handleClick : function(ev){
	this.$emit('click',ev);
	},

	handleHover : function(ev){
	this.$emit('mouseover',ev);
	this.$el.querySelector('.blueButton').style.display = hidden;
	}

	}
}
</script>
<style>

.blueButton {
	padding : 0.6em 1.3em;
	background-color :#017bff ;
	border-radius: 0.8em;
	border : none;
	color : #fff;
	opacity : 1;
}


</style>