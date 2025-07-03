import { UseBefore } from "routing-controllers";
import { AuthGuardVerification } from "../frameworks/guard/guard-verification";
import { AuthGuard } from "../frameworks/guard/index";

@UseBefore(AuthGuard)
@UseBefore(AuthGuardVerification)
export class BaseController {}
