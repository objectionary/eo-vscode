// Generated from resources/Program.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ProgramListener } from "./ProgramListener";
import { ProgramVisitor } from "./ProgramVisitor";


export class ProgramParser extends Parser {
	public static readonly COMMENT = 1;
	public static readonly META = 2;
	public static readonly ROOT = 3;
	public static readonly HOME = 4;
	public static readonly STAR = 5;
	public static readonly DOTS = 6;
	public static readonly CONST = 7;
	public static readonly SLASH = 8;
	public static readonly COLON = 9;
	public static readonly COPY = 10;
	public static readonly ARROW = 11;
	public static readonly VERTEX = 12;
	public static readonly SIGMA = 13;
	public static readonly XI = 14;
	public static readonly PLUS = 15;
	public static readonly MINUS = 16;
	public static readonly QUESTION = 17;
	public static readonly SPACE = 18;
	public static readonly DOT = 19;
	public static readonly LSQ = 20;
	public static readonly RSQ = 21;
	public static readonly LB = 22;
	public static readonly RB = 23;
	public static readonly AT = 24;
	public static readonly RHO = 25;
	public static readonly HASH = 26;
	public static readonly EOL = 27;
	public static readonly BYTES = 28;
	public static readonly BOOL = 29;
	public static readonly STRING = 30;
	public static readonly INT = 31;
	public static readonly FLOAT = 32;
	public static readonly HEX = 33;
	public static readonly NAME = 34;
	public static readonly TEXT = 35;
	public static readonly BAD_CHARACTER = 36;
	public static readonly TAB = 37;
	public static readonly UNTAB = 38;
	public static readonly RULE_program = 0;
	public static readonly RULE_license = 1;
	public static readonly RULE_metas = 2;
	public static readonly RULE_objects = 3;
	public static readonly RULE_object = 4;
	public static readonly RULE_abstraction = 5;
	public static readonly RULE_attributes = 6;
	public static readonly RULE_attribute = 7;
	public static readonly RULE_label = 8;
	public static readonly RULE_tail = 9;
	public static readonly RULE_suffix = 10;
	public static readonly RULE_method = 11;
	public static readonly RULE_scope = 12;
	public static readonly RULE_application = 13;
	public static readonly RULE_htail = 14;
	public static readonly RULE_head = 15;
	public static readonly RULE_has = 16;
	public static readonly RULE_data = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "license", "metas", "objects", "object", "abstraction", "attributes", 
		"attribute", "label", "tail", "suffix", "method", "scope", "application", 
		"htail", "head", "has", "data",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'Q'", "'QQ'", "'*'", "'...'", "'!'", 
		"'/'", "':'", "'''", "'>'", "'<'", "'&'", "'$'", "'+'", "'-'", "'?'", 
		"' '", "'.'", "'['", "']'", "'('", "')'", "'@'", "'^'", "'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMENT", "META", "ROOT", "HOME", "STAR", "DOTS", "CONST", 
		"SLASH", "COLON", "COPY", "ARROW", "VERTEX", "SIGMA", "XI", "PLUS", "MINUS", 
		"QUESTION", "SPACE", "DOT", "LSQ", "RSQ", "LB", "RB", "AT", "RHO", "HASH", 
		"EOL", "BYTES", "BOOL", "STRING", "INT", "FLOAT", "HEX", "NAME", "TEXT", 
		"BAD_CHARACTER", "TAB", "UNTAB",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ProgramParser._LITERAL_NAMES, ProgramParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ProgramParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Program.g4"; }

	// @Override
	public get ruleNames(): string[] { return ProgramParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ProgramParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ProgramParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ProgramParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 36;
				this.license();
				}
				break;
			}
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProgramParser.META) {
				{
				this.state = 39;
				this.metas();
				}
			}

			this.state = 42;
			this.objects();
			this.state = 43;
			this.match(ProgramParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public license(): LicenseContext {
		let _localctx: LicenseContext = new LicenseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ProgramParser.RULE_license);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 45;
					this.match(ProgramParser.COMMENT);
					this.state = 46;
					this.match(ProgramParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 49;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metas(): MetasContext {
		let _localctx: MetasContext = new MetasContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ProgramParser.RULE_metas);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 51;
				this.match(ProgramParser.META);
				this.state = 52;
				this.match(ProgramParser.EOL);
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ProgramParser.META);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objects(): ObjectsContext {
		let _localctx: ObjectsContext = new ObjectsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ProgramParser.RULE_objects);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 57;
						this.match(ProgramParser.COMMENT);
						this.state = 58;
						this.match(ProgramParser.EOL);
						}
						}
					}
					this.state = 63;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 64;
				this.object();
				this.state = 65;
				this.match(ProgramParser.EOL);
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProgramParser.COMMENT) | (1 << ProgramParser.ROOT) | (1 << ProgramParser.HOME) | (1 << ProgramParser.STAR) | (1 << ProgramParser.DOTS) | (1 << ProgramParser.SIGMA) | (1 << ProgramParser.XI) | (1 << ProgramParser.LSQ) | (1 << ProgramParser.LB) | (1 << ProgramParser.AT) | (1 << ProgramParser.RHO) | (1 << ProgramParser.BYTES) | (1 << ProgramParser.BOOL) | (1 << ProgramParser.STRING) | (1 << ProgramParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ProgramParser.FLOAT - 32)) | (1 << (ProgramParser.HEX - 32)) | (1 << (ProgramParser.NAME - 32)) | (1 << (ProgramParser.TEXT - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ProgramParser.RULE_object);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 71;
				this.abstraction();
				}
				break;

			case 2:
				{
				this.state = 72;
				this.application(0);
				}
				break;
			}
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 75;
				this.tail();
				}
				break;
			}
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 78;
					this.match(ProgramParser.EOL);
					this.state = 79;
					this.method();
					this.state = 81;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						this.state = 80;
						this.htail();
						}
						break;
					}
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ProgramParser.SPACE) {
						{
						this.state = 83;
						this.suffix();
						}
					}

					this.state = 87;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						this.state = 86;
						this.tail();
						}
						break;
					}
					}
					}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstraction(): AbstractionContext {
		let _localctx: AbstractionContext = new AbstractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ProgramParser.RULE_abstraction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProgramParser.COMMENT) {
				{
				{
				this.state = 94;
				this.match(ProgramParser.COMMENT);
				this.state = 95;
				this.match(ProgramParser.EOL);
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.attributes();
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				{
				this.state = 102;
				this.suffix();
				this.state = 106;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 103;
					this.match(ProgramParser.SPACE);
					this.state = 104;
					this.match(ProgramParser.SLASH);
					this.state = 105;
					_la = this._input.LA(1);
					if (!(_la === ProgramParser.QUESTION || _la === ProgramParser.NAME)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				}
				break;

			case 2:
				{
				this.state = 108;
				this.htail();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ProgramParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(ProgramParser.LSQ);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProgramParser.AT || _la === ProgramParser.NAME) {
				{
				this.state = 112;
				this.attribute();
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ProgramParser.SPACE) {
					{
					{
					this.state = 113;
					this.match(ProgramParser.SPACE);
					this.state = 114;
					this.attribute();
					}
					}
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 122;
			this.match(ProgramParser.RSQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ProgramParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.label();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ProgramParser.RULE_label);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProgramParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.match(ProgramParser.AT);
				}
				break;
			case ProgramParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 127;
				this.match(ProgramParser.NAME);
				this.state = 129;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 128;
					this.match(ProgramParser.DOTS);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tail(): TailContext {
		let _localctx: TailContext = new TailContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ProgramParser.RULE_tail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(ProgramParser.EOL);
			this.state = 134;
			this.match(ProgramParser.TAB);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 135;
				this.object();
				this.state = 136;
				this.match(ProgramParser.EOL);
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ProgramParser.COMMENT) | (1 << ProgramParser.ROOT) | (1 << ProgramParser.HOME) | (1 << ProgramParser.STAR) | (1 << ProgramParser.DOTS) | (1 << ProgramParser.SIGMA) | (1 << ProgramParser.XI) | (1 << ProgramParser.LSQ) | (1 << ProgramParser.LB) | (1 << ProgramParser.AT) | (1 << ProgramParser.RHO) | (1 << ProgramParser.BYTES) | (1 << ProgramParser.BOOL) | (1 << ProgramParser.STRING) | (1 << ProgramParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ProgramParser.FLOAT - 32)) | (1 << (ProgramParser.HEX - 32)) | (1 << (ProgramParser.NAME - 32)) | (1 << (ProgramParser.TEXT - 32)))) !== 0));
			this.state = 142;
			this.match(ProgramParser.UNTAB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public suffix(): SuffixContext {
		let _localctx: SuffixContext = new SuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ProgramParser.RULE_suffix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(ProgramParser.SPACE);
			this.state = 145;
			this.match(ProgramParser.ARROW);
			this.state = 146;
			this.match(ProgramParser.SPACE);
			this.state = 147;
			this.label();
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.match(ProgramParser.CONST);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ProgramParser.RULE_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(ProgramParser.DOT);
			this.state = 152;
			_localctx._mtd = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (ProgramParser.VERTEX - 12)) | (1 << (ProgramParser.AT - 12)) | (1 << (ProgramParser.RHO - 12)) | (1 << (ProgramParser.NAME - 12)))) !== 0))) {
				_localctx._mtd = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 153;
				this.match(ProgramParser.COPY);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ProgramParser.RULE_scope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(ProgramParser.LB);
			this.state = 157;
			this.application(0);
			this.state = 158;
			this.match(ProgramParser.RB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public application(): ApplicationContext;
	public application(_p: number): ApplicationContext;
	// @RuleVersion(0)
	public application(_p?: number): ApplicationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ApplicationContext = new ApplicationContext(this._ctx, _parentState);
		let _prevctx: ApplicationContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, ProgramParser.RULE_application, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProgramParser.COMMENT:
			case ProgramParser.ROOT:
			case ProgramParser.HOME:
			case ProgramParser.STAR:
			case ProgramParser.DOTS:
			case ProgramParser.SIGMA:
			case ProgramParser.XI:
			case ProgramParser.LSQ:
			case ProgramParser.AT:
			case ProgramParser.RHO:
			case ProgramParser.BYTES:
			case ProgramParser.BOOL:
			case ProgramParser.STRING:
			case ProgramParser.INT:
			case ProgramParser.FLOAT:
			case ProgramParser.HEX:
			case ProgramParser.NAME:
			case ProgramParser.TEXT:
				{
				this.state = 161;
				this.head();
				this.state = 163;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 162;
					this.htail();
					}
					break;
				}
				}
				break;
			case ProgramParser.LB:
				{
				this.state = 165;
				this.scope();
				this.state = 167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 166;
					this.htail();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 188;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 186;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						_localctx = new ApplicationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProgramParser.RULE_application);
						this.state = 171;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 172;
						this.method();
						this.state = 174;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
						case 1:
							{
							this.state = 173;
							this.htail();
							}
							break;
						}
						}
						break;

					case 2:
						{
						_localctx = new ApplicationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProgramParser.RULE_application);
						this.state = 176;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 177;
						this.has();
						this.state = 179;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
						case 1:
							{
							this.state = 178;
							this.htail();
							}
							break;
						}
						}
						break;

					case 3:
						{
						_localctx = new ApplicationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ProgramParser.RULE_application);
						this.state = 181;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 182;
						this.suffix();
						this.state = 184;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
						case 1:
							{
							this.state = 183;
							this.htail();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htail(): HtailContext {
		let _localctx: HtailContext = new HtailContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ProgramParser.RULE_htail);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 209;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						this.state = 191;
						this.match(ProgramParser.SPACE);
						this.state = 192;
						this.head();
						}
						break;

					case 2:
						{
						this.state = 193;
						this.match(ProgramParser.SPACE);
						this.state = 194;
						this.application(0);
						this.state = 195;
						this.method();
						}
						break;

					case 3:
						{
						this.state = 197;
						this.match(ProgramParser.SPACE);
						this.state = 198;
						this.scope();
						}
						break;

					case 4:
						{
						this.state = 199;
						this.match(ProgramParser.SPACE);
						this.state = 200;
						this.application(0);
						this.state = 201;
						this.has();
						}
						break;

					case 5:
						{
						this.state = 203;
						this.match(ProgramParser.SPACE);
						this.state = 204;
						this.application(0);
						this.state = 205;
						this.suffix();
						}
						break;

					case 6:
						{
						this.state = 207;
						this.match(ProgramParser.SPACE);
						this.state = 208;
						this.abstraction();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 211;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public head(): HeadContext {
		let _localctx: HeadContext = new HeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ProgramParser.RULE_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProgramParser.DOTS) {
				{
				this.state = 213;
				this.match(ProgramParser.DOTS);
				}
			}

			this.state = 231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 216;
				this.match(ProgramParser.ROOT);
				}
				break;

			case 2:
				{
				this.state = 217;
				this.match(ProgramParser.HOME);
				}
				break;

			case 3:
				{
				this.state = 218;
				this.match(ProgramParser.AT);
				}
				break;

			case 4:
				{
				this.state = 219;
				this.match(ProgramParser.RHO);
				}
				break;

			case 5:
				{
				this.state = 220;
				this.match(ProgramParser.XI);
				}
				break;

			case 6:
				{
				this.state = 221;
				this.match(ProgramParser.SIGMA);
				}
				break;

			case 7:
				{
				this.state = 222;
				this.match(ProgramParser.STAR);
				}
				break;

			case 8:
				{
				this.state = 223;
				this.match(ProgramParser.NAME);
				this.state = 225;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 224;
					this.match(ProgramParser.COPY);
					}
					break;
				}
				}
				break;

			case 9:
				{
				this.state = 227;
				this.match(ProgramParser.NAME);
				this.state = 228;
				this.match(ProgramParser.DOT);
				}
				break;

			case 10:
				{
				this.state = 229;
				this.data();
				}
				break;

			case 11:
				{
				this.state = 230;
				this.abstraction();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public has(): HasContext {
		let _localctx: HasContext = new HasContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ProgramParser.RULE_has);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(ProgramParser.COLON);
			this.state = 234;
			this.match(ProgramParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data(): DataContext {
		let _localctx: DataContext = new DataContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ProgramParser.RULE_data);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (ProgramParser.BYTES - 28)) | (1 << (ProgramParser.BOOL - 28)) | (1 << (ProgramParser.STRING - 28)) | (1 << (ProgramParser.INT - 28)) | (1 << (ProgramParser.FLOAT - 28)) | (1 << (ProgramParser.HEX - 28)) | (1 << (ProgramParser.TEXT - 28)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.application_sempred(_localctx as ApplicationContext, predIndex);
		}
		return true;
	}
	private application_sempred(_localctx: ApplicationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xF1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x05\x02(\n\x02\x03\x02\x05\x02+\n\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x06\x032\n\x03\r\x03\x0E\x033\x03\x04\x03\x04" +
		"\x06\x048\n\x04\r\x04\x0E\x049\x03\x05\x03\x05\x07\x05>\n\x05\f\x05\x0E" +
		"\x05A\v\x05\x03\x05\x03\x05\x03\x05\x06\x05F\n\x05\r\x05\x0E\x05G\x03" +
		"\x06\x03\x06\x05\x06L\n\x06\x03\x06\x05\x06O\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06T\n\x06\x03\x06\x05\x06W\n\x06\x03\x06\x05\x06Z\n\x06\x07" +
		"\x06\\\n\x06\f\x06\x0E\x06_\v\x06\x03\x07\x03\x07\x07\x07c\n\x07\f\x07" +
		"\x0E\x07f\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07m\n\x07" +
		"\x03\x07\x05\x07p\n\x07\x03\b\x03\b\x03\b\x03\b\x07\bv\n\b\f\b\x0E\by" +
		"\v\b\x05\b{\n\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\x84\n" +
		"\n\x05\n\x86\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\x8D\n\v\r\v\x0E\v" +
		"\x8E\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x98\n\f\x03\r\x03" +
		"\r\x03\r\x05\r\x9D\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\xA6\n\x0F\x03\x0F\x03\x0F\x05\x0F\xAA\n\x0F\x05\x0F\xAC" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB1\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xB6\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xBB\n\x0F\x07\x0F\xBD" +
		"\n\x0F\f\x0F\x0E\x0F\xC0\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x06\x10\xD4\n\x10\r\x10\x0E\x10\xD5\x03" +
		"\x11\x05\x11\xD9\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\xE4\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\xEA\n\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x02\x02\x03\x1C\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02\x02\x05\x04\x02\x13\x13$$\x05\x02\x0E\x0E\x1A\x1B$$\x04\x02" +
		"\x1E#%%\x02\u0110\x02\'\x03\x02\x02\x02\x041\x03\x02\x02\x02\x067\x03" +
		"\x02\x02\x02\bE\x03\x02\x02\x02\nK\x03\x02\x02\x02\fd\x03\x02\x02\x02" +
		"\x0Eq\x03\x02\x02\x02\x10~\x03\x02\x02\x02\x12\x85\x03\x02\x02\x02\x14" +
		"\x87\x03\x02\x02\x02\x16\x92\x03\x02\x02\x02\x18\x99\x03\x02\x02\x02\x1A" +
		"\x9E\x03\x02\x02\x02\x1C\xAB\x03\x02\x02\x02\x1E\xD3\x03\x02\x02\x02 " +
		"\xD8\x03\x02\x02\x02\"\xEB\x03\x02\x02\x02$\xEE\x03\x02\x02\x02&(\x05" +
		"\x04\x03\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02(*\x03\x02\x02\x02)" +
		"+\x05\x06\x04\x02*)\x03\x02\x02\x02*+\x03\x02\x02\x02+,\x03\x02\x02\x02" +
		",-\x05\b\x05\x02-.\x07\x02\x02\x03.\x03\x03\x02\x02\x02/0\x07\x03\x02" +
		"\x0202\x07\x1D\x02\x021/\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0234\x03\x02\x02\x024\x05\x03\x02\x02\x0256\x07\x04\x02\x0268\x07\x1D" +
		"\x02\x0275\x03\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02" +
		"\x02\x02:\x07\x03\x02\x02\x02;<\x07\x03\x02\x02<>\x07\x1D\x02\x02=;\x03" +
		"\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03" +
		"\x02\x02\x02A?\x03\x02\x02\x02BC\x05\n\x06\x02CD\x07\x1D\x02\x02DF\x03" +
		"\x02\x02\x02E?\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03" +
		"\x02\x02\x02H\t\x03\x02\x02\x02IL\x05\f\x07\x02JL\x05\x1C\x0F\x02KI\x03" +
		"\x02\x02\x02KJ\x03\x02\x02\x02LN\x03\x02\x02\x02MO\x05\x14\v\x02NM\x03" +
		"\x02\x02\x02NO\x03\x02\x02\x02O]\x03\x02\x02\x02PQ\x07\x1D\x02\x02QS\x05" +
		"\x18\r\x02RT\x05\x1E\x10\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02TV\x03" +
		"\x02\x02\x02UW\x05\x16\f\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03" +
		"\x02\x02\x02XZ\x05\x14\v\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03" +
		"\x02\x02\x02[P\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^" +
		"\x03\x02\x02\x02^\v\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\x03\x02\x02" +
		"ac\x07\x1D\x02\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02" +
		"de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02go\x05\x0E\b\x02" +
		"hl\x05\x16\f\x02ij\x07\x14\x02\x02jk\x07\n\x02\x02km\t\x02\x02\x02li\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mp\x03\x02\x02\x02np\x05\x1E\x10\x02oh\x03" +
		"\x02\x02\x02on\x03\x02\x02\x02op\x03\x02\x02\x02p\r\x03\x02\x02\x02qz" +
		"\x07\x16\x02\x02rw\x05\x10\t\x02st\x07\x14\x02\x02tv\x05\x10\t\x02us\x03" +
		"\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x{\x03" +
		"\x02\x02\x02yw\x03\x02\x02\x02zr\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03" +
		"\x02\x02\x02|}\x07\x17\x02\x02}\x0F\x03\x02\x02\x02~\x7F\x05\x12\n\x02" +
		"\x7F\x11\x03\x02\x02\x02\x80\x86\x07\x1A\x02\x02\x81\x83\x07$\x02\x02" +
		"\x82\x84\x07\b\x02\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02" +
		"\x84\x86\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x85\x81\x03\x02\x02\x02" +
		"\x86\x13\x03\x02\x02\x02\x87\x88\x07\x1D\x02\x02\x88\x8C\x07\'\x02\x02" +
		"\x89\x8A\x05\n\x06\x02\x8A\x8B\x07\x1D\x02\x02\x8B\x8D\x03\x02\x02\x02" +
		"\x8C\x89\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02" +
		"\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x07(\x02\x02" +
		"\x91\x15\x03\x02\x02\x02\x92\x93\x07\x14\x02\x02\x93\x94\x07\r\x02\x02" +
		"\x94\x95\x07\x14\x02\x02\x95\x97\x05\x12\n\x02\x96\x98\x07\t\x02\x02\x97" +
		"\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x17\x03\x02\x02\x02\x99" +
		"\x9A\x07\x15\x02\x02\x9A\x9C\t\x03\x02\x02\x9B\x9D\x07\f\x02\x02\x9C\x9B" +
		"\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x19\x03\x02\x02\x02\x9E\x9F" +
		"\x07\x18\x02\x02\x9F\xA0\x05\x1C\x0F\x02\xA0\xA1\x07\x19\x02\x02\xA1\x1B" +
		"\x03\x02\x02\x02\xA2\xA3\b\x0F\x01\x02\xA3\xA5\x05 \x11\x02\xA4\xA6\x05" +
		"\x1E\x10\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xAC\x03" +
		"\x02\x02\x02\xA7\xA9\x05\x1A\x0E\x02\xA8\xAA\x05\x1E\x10\x02\xA9\xA8\x03" +
		"\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA2\x03" +
		"\x02\x02\x02\xAB\xA7\x03\x02\x02\x02\xAC\xBE\x03\x02\x02\x02\xAD\xAE\f" +
		"\x06\x02\x02\xAE\xB0\x05\x18\r\x02\xAF\xB1\x05\x1E\x10\x02\xB0\xAF\x03" +
		"\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xBD\x03\x02\x02\x02\xB2\xB3\f" +
		"\x04\x02\x02\xB3\xB5\x05\"\x12\x02\xB4\xB6\x05\x1E\x10\x02\xB5\xB4\x03" +
		"\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xBD\x03\x02\x02\x02\xB7\xB8\f" +
		"\x03\x02\x02\xB8\xBA\x05\x16\f\x02\xB9\xBB\x05\x1E\x10\x02\xBA\xB9\x03" +
		"\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03\x02\x02\x02\xBC\xAD\x03" +
		"\x02\x02\x02\xBC\xB2\x03\x02\x02\x02\xBC\xB7\x03\x02\x02\x02\xBD\xC0\x03" +
		"\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\x1D\x03" +
		"\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x07\x14\x02\x02\xC2\xD4\x05" +
		" \x11\x02\xC3\xC4\x07\x14\x02\x02\xC4\xC5\x05\x1C\x0F\x02\xC5\xC6\x05" +
		"\x18\r\x02\xC6\xD4\x03\x02\x02\x02\xC7\xC8\x07\x14\x02\x02\xC8\xD4\x05" +
		"\x1A\x0E\x02\xC9\xCA\x07\x14\x02\x02\xCA\xCB\x05\x1C\x0F\x02\xCB\xCC\x05" +
		"\"\x12\x02\xCC\xD4\x03\x02\x02\x02\xCD\xCE\x07\x14\x02\x02\xCE\xCF\x05" +
		"\x1C\x0F\x02\xCF\xD0\x05\x16\f\x02\xD0\xD4\x03\x02\x02\x02\xD1\xD2\x07" +
		"\x14\x02\x02\xD2\xD4\x05\f\x07\x02\xD3\xC1\x03\x02\x02\x02\xD3\xC3\x03" +
		"\x02\x02\x02\xD3\xC7\x03\x02\x02\x02\xD3\xC9\x03\x02\x02\x02\xD3\xCD\x03" +
		"\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD3\x03" +
		"\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\x1F\x03\x02\x02\x02\xD7\xD9\x07" +
		"\b\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xE9\x03" +
		"\x02\x02\x02\xDA\xEA\x07\x05\x02\x02\xDB\xEA\x07\x06\x02\x02\xDC\xEA\x07" +
		"\x1A\x02\x02\xDD\xEA\x07\x1B\x02\x02\xDE\xEA\x07\x10\x02\x02\xDF\xEA\x07" +
		"\x0F\x02\x02\xE0\xEA\x07\x07\x02\x02\xE1\xE3\x07$\x02\x02\xE2\xE4\x07" +
		"\f\x02\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xEA\x03" +
		"\x02\x02\x02\xE5\xE6\x07$\x02\x02\xE6\xEA\x07\x15\x02\x02\xE7\xEA\x05" +
		"$\x13\x02\xE8\xEA\x05\f\x07\x02\xE9\xDA\x03\x02\x02\x02\xE9\xDB\x03\x02" +
		"\x02\x02\xE9\xDC\x03\x02\x02\x02\xE9\xDD\x03\x02\x02\x02\xE9\xDE\x03\x02" +
		"\x02\x02\xE9\xDF\x03\x02\x02\x02\xE9\xE0\x03\x02\x02\x02\xE9\xE1\x03\x02" +
		"\x02\x02\xE9\xE5\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02" +
		"\x02\x02\xEA!\x03\x02\x02\x02\xEB\xEC\x07\v\x02\x02\xEC\xED\x07$\x02\x02" +
		"\xED#\x03\x02\x02\x02\xEE\xEF\t\x04\x02\x02\xEF%\x03\x02\x02\x02%\'*3" +
		"9?GKNSVY]dlowz\x83\x85\x8E\x97\x9C\xA5\xA9\xAB\xB0\xB5\xBA\xBC\xBE\xD3" +
		"\xD5\xD8\xE3\xE9";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ProgramParser.__ATN) {
			ProgramParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ProgramParser._serializedATN));
		}

		return ProgramParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public objects(): ObjectsContext {
		return this.getRuleContext(0, ObjectsContext);
	}
	public EOF(): TerminalNode { return this.getToken(ProgramParser.EOF, 0); }
	public license(): LicenseContext | undefined {
		return this.tryGetRuleContext(0, LicenseContext);
	}
	public metas(): MetasContext | undefined {
		return this.tryGetRuleContext(0, MetasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_program; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LicenseContext extends ParserRuleContext {
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.COMMENT);
		} else {
			return this.getToken(ProgramParser.COMMENT, i);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.EOL);
		} else {
			return this.getToken(ProgramParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_license; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterLicense) {
			listener.enterLicense(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitLicense) {
			listener.exitLicense(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitLicense) {
			return visitor.visitLicense(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetasContext extends ParserRuleContext {
	public META(): TerminalNode[];
	public META(i: number): TerminalNode;
	public META(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.META);
		} else {
			return this.getToken(ProgramParser.META, i);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.EOL);
		} else {
			return this.getToken(ProgramParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_metas; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterMetas) {
			listener.enterMetas(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitMetas) {
			listener.exitMetas(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitMetas) {
			return visitor.visitMetas(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectsContext extends ParserRuleContext {
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.EOL);
		} else {
			return this.getToken(ProgramParser.EOL, i);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.COMMENT);
		} else {
			return this.getToken(ProgramParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_objects; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterObjects) {
			listener.enterObjects(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitObjects) {
			listener.exitObjects(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitObjects) {
			return visitor.visitObjects(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public abstraction(): AbstractionContext | undefined {
		return this.tryGetRuleContext(0, AbstractionContext);
	}
	public application(): ApplicationContext | undefined {
		return this.tryGetRuleContext(0, ApplicationContext);
	}
	public tail(): TailContext[];
	public tail(i: number): TailContext;
	public tail(i?: number): TailContext | TailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TailContext);
		} else {
			return this.getRuleContext(i, TailContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.EOL);
		} else {
			return this.getToken(ProgramParser.EOL, i);
		}
	}
	public method(): MethodContext[];
	public method(i: number): MethodContext;
	public method(i?: number): MethodContext | MethodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodContext);
		} else {
			return this.getRuleContext(i, MethodContext);
		}
	}
	public htail(): HtailContext[];
	public htail(i: number): HtailContext;
	public htail(i?: number): HtailContext | HtailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtailContext);
		} else {
			return this.getRuleContext(i, HtailContext);
		}
	}
	public suffix(): SuffixContext[];
	public suffix(i: number): SuffixContext;
	public suffix(i?: number): SuffixContext | SuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuffixContext);
		} else {
			return this.getRuleContext(i, SuffixContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_object; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractionContext extends ParserRuleContext {
	public attributes(): AttributesContext {
		return this.getRuleContext(0, AttributesContext);
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.COMMENT);
		} else {
			return this.getToken(ProgramParser.COMMENT, i);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.EOL);
		} else {
			return this.getToken(ProgramParser.EOL, i);
		}
	}
	public htail(): HtailContext | undefined {
		return this.tryGetRuleContext(0, HtailContext);
	}
	public suffix(): SuffixContext | undefined {
		return this.tryGetRuleContext(0, SuffixContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.SPACE, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.SLASH, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.NAME, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_abstraction; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterAbstraction) {
			listener.enterAbstraction(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitAbstraction) {
			listener.exitAbstraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitAbstraction) {
			return visitor.visitAbstraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	public LSQ(): TerminalNode { return this.getToken(ProgramParser.LSQ, 0); }
	public RSQ(): TerminalNode { return this.getToken(ProgramParser.RSQ, 0); }
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.SPACE);
		} else {
			return this.getToken(ProgramParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_attributes; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitAttributes) {
			return visitor.visitAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_attribute; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.AT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.NAME, 0); }
	public DOTS(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.DOTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_label; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TailContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.EOL);
		} else {
			return this.getToken(ProgramParser.EOL, i);
		}
	}
	public TAB(): TerminalNode { return this.getToken(ProgramParser.TAB, 0); }
	public UNTAB(): TerminalNode { return this.getToken(ProgramParser.UNTAB, 0); }
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_tail; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterTail) {
			listener.enterTail(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitTail) {
			listener.exitTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitTail) {
			return visitor.visitTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuffixContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.SPACE);
		} else {
			return this.getToken(ProgramParser.SPACE, i);
		}
	}
	public ARROW(): TerminalNode { return this.getToken(ProgramParser.ARROW, 0); }
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_suffix; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterSuffix) {
			listener.enterSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitSuffix) {
			listener.exitSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitSuffix) {
			return visitor.visitSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodContext extends ParserRuleContext {
	public _mtd!: Token;
	public DOT(): TerminalNode { return this.getToken(ProgramParser.DOT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.NAME, 0); }
	public RHO(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.RHO, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.AT, 0); }
	public VERTEX(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.VERTEX, 0); }
	public COPY(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.COPY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_method; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterMethod) {
			listener.enterMethod(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitMethod) {
			listener.exitMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitMethod) {
			return visitor.visitMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	public LB(): TerminalNode { return this.getToken(ProgramParser.LB, 0); }
	public application(): ApplicationContext {
		return this.getRuleContext(0, ApplicationContext);
	}
	public RB(): TerminalNode { return this.getToken(ProgramParser.RB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_scope; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterScope) {
			listener.enterScope(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitScope) {
			listener.exitScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitScope) {
			return visitor.visitScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplicationContext extends ParserRuleContext {
	public head(): HeadContext | undefined {
		return this.tryGetRuleContext(0, HeadContext);
	}
	public htail(): HtailContext | undefined {
		return this.tryGetRuleContext(0, HtailContext);
	}
	public application(): ApplicationContext | undefined {
		return this.tryGetRuleContext(0, ApplicationContext);
	}
	public method(): MethodContext | undefined {
		return this.tryGetRuleContext(0, MethodContext);
	}
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public has(): HasContext | undefined {
		return this.tryGetRuleContext(0, HasContext);
	}
	public suffix(): SuffixContext | undefined {
		return this.tryGetRuleContext(0, SuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_application; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterApplication) {
			listener.enterApplication(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitApplication) {
			listener.exitApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitApplication) {
			return visitor.visitApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtailContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProgramParser.SPACE);
		} else {
			return this.getToken(ProgramParser.SPACE, i);
		}
	}
	public head(): HeadContext[];
	public head(i: number): HeadContext;
	public head(i?: number): HeadContext | HeadContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HeadContext);
		} else {
			return this.getRuleContext(i, HeadContext);
		}
	}
	public application(): ApplicationContext[];
	public application(i: number): ApplicationContext;
	public application(i?: number): ApplicationContext | ApplicationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApplicationContext);
		} else {
			return this.getRuleContext(i, ApplicationContext);
		}
	}
	public method(): MethodContext[];
	public method(i: number): MethodContext;
	public method(i?: number): MethodContext | MethodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodContext);
		} else {
			return this.getRuleContext(i, MethodContext);
		}
	}
	public scope(): ScopeContext[];
	public scope(i: number): ScopeContext;
	public scope(i?: number): ScopeContext | ScopeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopeContext);
		} else {
			return this.getRuleContext(i, ScopeContext);
		}
	}
	public has(): HasContext[];
	public has(i: number): HasContext;
	public has(i?: number): HasContext | HasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HasContext);
		} else {
			return this.getRuleContext(i, HasContext);
		}
	}
	public suffix(): SuffixContext[];
	public suffix(i: number): SuffixContext;
	public suffix(i?: number): SuffixContext | SuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuffixContext);
		} else {
			return this.getRuleContext(i, SuffixContext);
		}
	}
	public abstraction(): AbstractionContext[];
	public abstraction(i: number): AbstractionContext;
	public abstraction(i?: number): AbstractionContext | AbstractionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AbstractionContext);
		} else {
			return this.getRuleContext(i, AbstractionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_htail; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterHtail) {
			listener.enterHtail(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitHtail) {
			listener.exitHtail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitHtail) {
			return visitor.visitHtail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeadContext extends ParserRuleContext {
	public ROOT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.ROOT, 0); }
	public HOME(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.HOME, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.AT, 0); }
	public RHO(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.RHO, 0); }
	public XI(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.XI, 0); }
	public SIGMA(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.SIGMA, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.STAR, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.NAME, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.DOT, 0); }
	public data(): DataContext | undefined {
		return this.tryGetRuleContext(0, DataContext);
	}
	public abstraction(): AbstractionContext | undefined {
		return this.tryGetRuleContext(0, AbstractionContext);
	}
	public DOTS(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.DOTS, 0); }
	public COPY(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.COPY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_head; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterHead) {
			listener.enterHead(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitHead) {
			listener.exitHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitHead) {
			return visitor.visitHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HasContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ProgramParser.COLON, 0); }
	public NAME(): TerminalNode { return this.getToken(ProgramParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_has; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterHas) {
			listener.enterHas(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitHas) {
			listener.exitHas(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitHas) {
			return visitor.visitHas(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataContext extends ParserRuleContext {
	public BYTES(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.BYTES, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.BOOL, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.TEXT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.STRING, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.FLOAT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(ProgramParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProgramParser.RULE_data; }
	// @Override
	public enterRule(listener: ProgramListener): void {
		if (listener.enterData) {
			listener.enterData(this);
		}
	}
	// @Override
	public exitRule(listener: ProgramListener): void {
		if (listener.exitData) {
			listener.exitData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProgramVisitor<Result>): Result {
		if (visitor.visitData) {
			return visitor.visitData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


