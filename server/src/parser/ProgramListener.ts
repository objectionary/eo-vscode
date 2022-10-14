// Generated from resources/Program.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./ProgramParser";
import { LicenseContext } from "./ProgramParser";
import { MetasContext } from "./ProgramParser";
import { ObjectsContext } from "./ProgramParser";
import { ObjectContext } from "./ProgramParser";
import { AbstractionContext } from "./ProgramParser";
import { AttributesContext } from "./ProgramParser";
import { AttributeContext } from "./ProgramParser";
import { LabelContext } from "./ProgramParser";
import { TailContext } from "./ProgramParser";
import { SuffixContext } from "./ProgramParser";
import { MethodContext } from "./ProgramParser";
import { ScopeContext } from "./ProgramParser";
import { ApplicationContext } from "./ProgramParser";
import { HtailContext } from "./ProgramParser";
import { HeadContext } from "./ProgramParser";
import { HasContext } from "./ProgramParser";
import { DataContext } from "./ProgramParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ProgramParser`.
 */
export interface ProgramListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ProgramParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.license`.
	 * @param ctx the parse tree
	 */
	enterLicense?: (ctx: LicenseContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.license`.
	 * @param ctx the parse tree
	 */
	exitLicense?: (ctx: LicenseContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.metas`.
	 * @param ctx the parse tree
	 */
	enterMetas?: (ctx: MetasContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.metas`.
	 * @param ctx the parse tree
	 */
	exitMetas?: (ctx: MetasContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.objects`.
	 * @param ctx the parse tree
	 */
	enterObjects?: (ctx: ObjectsContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.objects`.
	 * @param ctx the parse tree
	 */
	exitObjects?: (ctx: ObjectsContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.abstraction`.
	 * @param ctx the parse tree
	 */
	enterAbstraction?: (ctx: AbstractionContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.abstraction`.
	 * @param ctx the parse tree
	 */
	exitAbstraction?: (ctx: AbstractionContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.tail`.
	 * @param ctx the parse tree
	 */
	enterTail?: (ctx: TailContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.tail`.
	 * @param ctx the parse tree
	 */
	exitTail?: (ctx: TailContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.suffix`.
	 * @param ctx the parse tree
	 */
	enterSuffix?: (ctx: SuffixContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.suffix`.
	 * @param ctx the parse tree
	 */
	exitSuffix?: (ctx: SuffixContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.scope`.
	 * @param ctx the parse tree
	 */
	enterScope?: (ctx: ScopeContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.scope`.
	 * @param ctx the parse tree
	 */
	exitScope?: (ctx: ScopeContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.application`.
	 * @param ctx the parse tree
	 */
	enterApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.application`.
	 * @param ctx the parse tree
	 */
	exitApplication?: (ctx: ApplicationContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.htail`.
	 * @param ctx the parse tree
	 */
	enterHtail?: (ctx: HtailContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.htail`.
	 * @param ctx the parse tree
	 */
	exitHtail?: (ctx: HtailContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.head`.
	 * @param ctx the parse tree
	 */
	enterHead?: (ctx: HeadContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.head`.
	 * @param ctx the parse tree
	 */
	exitHead?: (ctx: HeadContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.has`.
	 * @param ctx the parse tree
	 */
	enterHas?: (ctx: HasContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.has`.
	 * @param ctx the parse tree
	 */
	exitHas?: (ctx: HasContext) => void;

	/**
	 * Enter a parse tree produced by `ProgramParser.data`.
	 * @param ctx the parse tree
	 */
	enterData?: (ctx: DataContext) => void;
	/**
	 * Exit a parse tree produced by `ProgramParser.data`.
	 * @param ctx the parse tree
	 */
	exitData?: (ctx: DataContext) => void;
}

