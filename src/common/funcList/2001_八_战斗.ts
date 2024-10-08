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
				[left, 178, 626, 0x292a22],
				[left, 178, 665, 0x0f120f],
				[left, 64, 659, 0xaba7a8],
				[left, 77, 63, 0x999c9f],
				[left, 49, 51, 0x9c9fa1],
				[left, 15, 47, 0x424242],
				[right, 1147, 120, 0x000000],
				[right, 1152, 268, 0x000000],
				[right, 1158, 411, 0x000000],
				[right, 1158, 555, 0x000000],
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
