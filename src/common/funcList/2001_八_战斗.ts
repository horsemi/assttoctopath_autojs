import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func2001 implements IFuncOrigin {
	id = 2001;
	name = '准备战斗';
	desc = '';
	config = [{
		desc: '配置',
		config: []
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 准备战斗
		desc: [
			1280, 720,
			[
				[left, 15, 47, 0x424242],
				[left, 93, 84, 0x424242],
				[right, 1147, 120, 0x000000],
				[right, 1152, 268, 0x000000],
				[right, 1158, 411, 0x000000],
				[right, 1158, 555, 0x000000],
				[right, 1057, 67, 0xf1ede7],
				[right, 1057, 210, 0xf1ede7],
				[right, 1057, 353, 0xf1ede7],
				[right, 1057, 496, 0xf1ede7],
				[right, 1091, 194, 0xfff873],
				[right, 1091, 52, 0xffff75],
				[right, 1091, 337, 0xfff873],
				[right, 1091, 480, 0xfff873],
			]
		],
	},
	{
		// 点击委托
		desc: [
			1280, 720,
			[
				[right, 1120, 634, 0xffffff],
				[right, 1063, 653, 0xffffff],
			]
		],
		oper: [
			[center, 1280, 720, 462, 631, 517, 654, 1000],	//	点击委托
			[right, 1280, 720, 1003, 619, 1200, 672, 1000],	//	点击委托战斗开始
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// const thisconf = thisScript.scheme.config['2001'];

		if (thisScript.oper({
			id: 2001,
			name: '准备战斗',
			operator: [
				thisOperator[0],
			]
		})) {
			return thisScript.oper({
				id: 2001,
				name: '准备战斗',
				operator: [
					thisOperator[1],
				]
			});
		}

		return false;
	}
}

export default new Func2001();
