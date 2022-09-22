import { IService } from "../../Services/IService";

export default interface ICommandConfig {
	commandName: string;
	service?: any;
	args: any;
}
