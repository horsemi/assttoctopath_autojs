import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func2002 implements IFuncOrigin {
	id = 2002;
	name = '退出结算';
	desc = '';
	operator: IFuncOperatorOrigin[] = [{ // 结算界面
		desc: [
			1280, 720,
			[
				[left, 23, 93, 0x6a6a6b],
				[left, 102, 48, 0xf0ebe8],
				[left, 205, 62, 0xf0ebe8],
				[center, 324, 28, 0xf0ebe8],
				[left, 230, 87, 0x6e6e70],
				[left, 72, 171, 0x2a281f],
				[center, 800, 478, 0x353535],
				[center, 801, 606, 0x363737],
				[right, 1235, 654, 0x444444],
				[right, 1271, 696, 0x575757],
			]
		],
		oper: [
			[right, 1280, 720, 1079, 556, 1226, 607, 1000],
			[center, 1280, 720, 959, 391, 1203, 443, -1],    //  预设分组 滑动开始位置
			[center, 1280, 720, 928, 521, 1203, 580, -1],    //  预设分组 滑动结束位置
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// const thisconf = thisScript.scheme.config['2002'];

		if (thisScript.oper({
			id: 2002,
			name: '退出结算',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			thisScript.regionBezierSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [100, 150], 0, 1000);
		}
		return false;
	}
}

export default new Func2002();
