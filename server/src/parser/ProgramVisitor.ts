// Generated from resources/Program.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ProgramParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ProgramVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ProgramParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.license`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLicense?: (ctx: LicenseContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.metas`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetas?: (ctx: MetasContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.objects`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjects?: (ctx: ObjectsContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.abstraction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstraction?: (ctx: AbstractionContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.tail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTail?: (ctx: TailContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.suffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuffix?: (ctx: SuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod?: (ctx: MethodContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope?: (ctx: ScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.application`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplication?: (ctx: ApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.htail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtail?: (ctx: HtailContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHead?: (ctx: HeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.has`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHas?: (ctx: HasContext) => Result;

	/**
	 * Visit a parse tree produced by `ProgramParser.data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData?: (ctx: DataContext) => Result;
}

