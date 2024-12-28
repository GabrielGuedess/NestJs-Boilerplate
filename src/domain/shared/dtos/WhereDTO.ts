export abstract class WhereDTO {
  OR?: Array<this>;
  AND?: Array<this>;
  NOT?: Array<this>;
}
