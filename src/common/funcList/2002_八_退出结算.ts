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
	config = [{
		desc: '配置',
		config: []
	}];
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
			[center, 1280, 720, 925, 544, 1138, 589, 1000],
			[center, 1280, 720, 925, 544, 1138, 589, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['2002'];

		return thisScript.oper({
			id: 2002,
			name: '退出结算',
			operator: [
				thisOperator[0], 
			]
		});
	}
}

export default new Func2002();
