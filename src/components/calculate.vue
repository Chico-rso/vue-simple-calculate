<template>
	<div class="calculate">
		<div class="calculate__display">
			<div class="calculate__display-text">{{ current }}</div>
		</div>
		<div class="calculate__keys">
			<div class="calculate__keys-row">
				<button class="calculate__keys-button calculate__keys-button_type_clear" @click="clear">C</button>
				<button class="calculate__keys-button calculate__keys-button_type_backspace" @click="backspace">Backspace</button>
				<button class="calculate__keys-button calculate__keys-button_type_divide" @click="handleOperator('/')">/</button>
			</div>
			<div class="calculate__keys-row">
				<button class="calculate__keys-button calculate__keys-button_type_7" @click="appendToDisplay(7)">7</button>
				<button class="calculate__keys-button calculate__keys-button_type_8" @click="appendToDisplay(8)">8</button>
				<button class="calculate__keys-button calculate__keys-button_type_9" @click="appendToDisplay(9)">9</button>
				<button class="calculate__keys-button calculate__keys-button_type_multiply" @click="handleOperator('*')">*</button>
			</div>
			<div class="calculate__keys-row">
				<button class="calculate__keys-button calculate__keys-button_type_4" @click="appendToDisplay(4)">4</button>
				<button class="calculate__keys-button calculate__keys-button_type_5" @click="appendToDisplay(5)">5</button>
				<button class="calculate__keys-button calculate__keys-button_type_6" @click="appendToDisplay(6)">6</button>
				<button class="calculate__keys-button calculate__keys-button_type_minus" @click="handleOperator('-')">-</button>
			</div>
			<div class="calculate__keys-row">
				<button class="calculate__keys-button calculate__keys-button_type_1" @click="appendToDisplay(1)">1</button>
				<button class="calculate__keys-button calculate__keys-button_type_2" @click="appendToDisplay(2)">2</button>
				<button class="calculate__keys-button calculate__keys-button_type_3" @click="appendToDisplay(3)">3</button>
				<button class="calculate__keys-button calculate__keys-button_type_plus" @click="handleOperator('+')">+</button>
			</div>
			<div class="calculate__keys-row">
				<button class="calculate__keys-button calculate__keys-button_type_0" @click="appendToDisplay(0)">0</button>
				<button class="calculate__keys-button calculate__keys-button_type_point" @click="convertDecimal()">.</button>
				<button class="calculate__keys-button calculate__keys-button_type_result" @click="handleOperator('=')">=</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data()
	{
		return{
			current: '',
			previous: null,
			operator: null,
			clickedOperator: false
		}
	},
	methods:
	{
		clear()
		{
			this.current = '';
			this.previous = null;
			this.operator = null;
			this.clickedOperator = false;
		},
		backspace()
		{
			this.current = this.current.slice(0, -1);
		},
		appendToDisplay(number)
		{
			if(this.clickedOperator)
			{
				this.clickedOperator = false;
				this.current = number;
			}
			else
			{
				this.current += number;
			}
		},
		convertDecimal()
		{
			if(this.clickedOperator)
			{
				this.clickedOperator = false;
				this.current = '0.';
			}
			else
			{
				if(this.current.indexOf('.') === -1)
				{
					this.current += '.';
				}
			}
		},
		handleOperator(newOperator)
		{
			const numberValue = parseFloat(this.current);
			if(this.operator && this.clickedOperator)
			{
				this.operator = newOperator;
			}
			if(this.previous === null)
			{
				this.previous = numberValue;
			}
			else if(this.operator)
			{
				const result = this.calculate(this.previous, numberValue, this.operator);
				this.current = String(result);
				this.previous = result;
			}
			this.clickedOperator = true;
			this.operator = newOperator

		},
		calculate(first, second, operator)
		{
			switch(operator)
			{
				case '+':
					return first + second;
				case '-':
					return first - second;
				case '*':
					return first * second;
				case '/':
					return first / second;
				default:
					return 0;
			}
		},
	},
}
</script>

<style lang="scss">
.calculate
{
	width: 300px;
	height:	fit-content;
	position: relative;
	margin: auto;
	box-shadow: 0px 0px 26px 0px rgba(179,43,179,1);
	border-radius: 10px 10px 10px 10px;
	overflow: hidden;
	background-color: #812C6630;
	backdrop-filter: blur(15px);
}
.calculate__keys{max-width: 100%;}
.calculate__keys-row
{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
}
.calculate__keys-button
{
	width: 100%;
	height: 70px;
	position: relative;
	cursor: pointer;
	color: #fff;
	border: none;
	background: transparent;
	font-size: 20px;
	&:hover
	{
		background-color: #b03f8c40;
		box-shadow: 0px 0px 10px 0px rgba(140,17,140,1);
	}
}
.calculate__display
{
	width: 100%;
	height: 100px;
	padding: 10px;
	border: 1px solid black;
	color: #fff;
	font-size: 28px;
	border: 0px solid #fff;
	border-radius: 10px 10px 0 0;
}
</style>