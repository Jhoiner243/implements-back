import { UseBefore } from "routing-controllers";
import { AuthGuard } from "../frameworks/guard/index";

@UseBefore(AuthGuard)
export class BaseController {}