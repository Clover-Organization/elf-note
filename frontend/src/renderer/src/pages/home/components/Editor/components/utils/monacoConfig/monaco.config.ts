import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

// Importando as contribuições de todas as linguagens suportadas
import 'monaco-editor/esm/vs/basic-languages/abap/abap.contribution';
import 'monaco-editor/esm/vs/basic-languages/apex/apex.contribution';
import 'monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution';
import 'monaco-editor/esm/vs/basic-languages/bat/bat.contribution';
import 'monaco-editor/esm/vs/basic-languages/cameligo/cameligo.contribution';
import 'monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution';
import 'monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import 'monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution';
import 'monaco-editor/esm/vs/basic-languages/csp/csp.contribution';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution';
import 'monaco-editor/esm/vs/basic-languages/dart/dart.contribution';
import 'monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution';
import 'monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution';
import 'monaco-editor/esm/vs/basic-languages/go/go.contribution';
import 'monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution';
import 'monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution';
import 'monaco-editor/esm/vs/basic-languages/ini/ini.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/julia/julia.contribution';
import 'monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution';
import 'monaco-editor/esm/vs/basic-languages/less/less.contribution';
import 'monaco-editor/esm/vs/basic-languages/lua/lua.contribution';
import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution';
import 'monaco-editor/esm/vs/basic-languages/mips/mips.contribution';
import 'monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution';
import 'monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution';
import 'monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution';
import 'monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution';
import 'monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.contribution';
import 'monaco-editor/esm/vs/basic-languages/perl/perl.contribution';
import 'monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution';
import 'monaco-editor/esm/vs/basic-languages/php/php.contribution';
import 'monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution';
import 'monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution';
import 'monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution';
import 'monaco-editor/esm/vs/basic-languages/pug/pug.contribution';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/r/r.contribution';
import 'monaco-editor/esm/vs/basic-languages/razor/razor.contribution';
import 'monaco-editor/esm/vs/basic-languages/redis/redis.contribution';
import 'monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution';
import 'monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution';
import 'monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution';
import 'monaco-editor/esm/vs/basic-languages/rust/rust.contribution';
import 'monaco-editor/esm/vs/basic-languages/sb/sb.contribution';
import 'monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution';
import 'monaco-editor/esm/vs/basic-languages/scss/scss.contribution';
import 'monaco-editor/esm/vs/basic-languages/shell/shell.contribution';
import 'monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution';
import 'monaco-editor/esm/vs/basic-languages/sophia/sophia.contribution';
import 'monaco-editor/esm/vs/basic-languages/sparql/sparql.contribution';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution';
import 'monaco-editor/esm/vs/basic-languages/st/st.contribution';
import 'monaco-editor/esm/vs/basic-languages/swift/swift.contribution';
import 'monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.contribution';
import 'monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution';
import 'monaco-editor/esm/vs/basic-languages/twig/twig.contribution';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
import 'monaco-editor/esm/vs/basic-languages/vb/vb.contribution';
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';

/**
 * This module exports the 'monaco' object, which provides access to the Monaco Editor API.
 * @module monaco.config
 * @exports monaco
 */
export { monaco };
