(function(){
  var fs = require('fs'),
      path = require('path'),

  utils = {
    readFile: function( filename ) {
      return fs.readFileSync( filename, 'utf-8' );
    },
    createFile: function( filename, data ) {
      return fs.writeFileSync( filename, data, 'utf-8' );
    },
    appendFile: function( filename, data ) {
      return fs.appendFileSync( filename, data, 'utf-8' );
    }
  },
  /**
   * @class
   * @param <string>
   */
  SecondaryNav = function( projectRoot ) {
    var dest = path.resolve( projectRoot, "_includes" ,"select.html" );
    utils.createFile( dest, "" );
    return {
      add: function( title, index ) {
        utils.appendFile( dest, '<option value="#' + index + '">' + title + '</option>' + "\n" );
      }
    };
  },
  /**
   * @class
   * @param <string>
   */
  DocNav = function( projectRoot ) {
    var dest = path.resolve( projectRoot, "_includes" ,"docs-nav.html" );
    utils.createFile( dest, "" );
    return {
      add: function( title, index ) {
        utils.appendFile( dest, '<li><a href="#' + index + '">' + title + '</a></li>' + "\n" );
      }
    };
  },
  /**
   * @class
   * @param <string>
   */
  Doc = function( projectRoot ) {
    var dest = path.resolve( projectRoot, "index.md" );
    utils.createFile( dest, "---\n" +
      "layout: default\n" +
      "title: Semantic HTML5 Templates\n" +
      "---\n\n"
    );
    return {
      add: function( data ) {
        utils.appendFile( dest, "\n" + data + "\n" );
      }
    };
  },
  /**
   * @class
   * @param <string>
   */
  Readme = function( projectRoot ) {
    var dest = path.resolve( projectRoot, "..", "README.md" );
    utils.createFile( dest, "# Semantic HTML5 Templates\n" +
    "High quality HTML markup means semantic HTML (one that defines meaning of the information in webpages rather than its representation)." +
    "Considering micro-formats and new elements and attributes introduced in HTML5 it may take much time" +
    "to design semantically valid markup even working on generic tasks." +
    "This collection of semantic HTML idioms (patterns) is meant to save this time.\n\n" +
    "* Source: https://github.com/dsheiko/h5i\n* Homepage: http://dsheiko.github.io/h5i/\n* Twitter: [@sheiko](https://twitter.com/sheiko)\n\n\n"
      );

    return {
      add: function( data ) {
        utils.appendFile( dest, "\n" + data );
      }
    };
  },
  /**
   * @class
   * @param <string>
   * @param <number>
   */
  Tpl = function( data, index  ) {
    return {
      getTitle: function() {
        var re = /^\s*#+/g,
            lines = data.split("\n");
        return data ? lines[ 0 ].replace( re, "" ) : "";
      },
      get: function() {
        return data;
      },
      getKramdown: function() {
        var re1 = /```html/gm,
            re2 = /```/gm,
            injectIndex = function( raw, index ) {
              var lines = raw.split("\n");
              lines[ 0 ] += "\n{: #" + index + "}\n";
              return lines.join("\n");
            };
        return data ? injectIndex( data, index  )
          .replace( re1, "{% highlight html %}" )
          .replace( re2, "{% endhighlight %}" ) : "";
      }
    };
  },
  /**
   * @class
   * @param <string>
   */
  Builder = function( projectRoot ) {
    return {
      run: function() {
        var that = this,
            tplRoot = path.resolve( projectRoot, "_templates" ),
            files = this.getTplFiles( tplRoot ),
            docNav = new DocNav( projectRoot ),
            doc = new Doc( projectRoot ),
            readme = new Readme( projectRoot ),
            secNav = new SecondaryNav( projectRoot );

        files.forEach(function( filename ){
          var index = that.getIndex( filename ),
              tpl = new Tpl( utils.readFile( path.resolve( tplRoot, filename ) ), index );

            docNav.add( tpl.getTitle(), index );
            secNav.add( tpl.getTitle(), index );
            doc.add( tpl.getKramdown() );
            readme.add( tpl.get() );
        });
      },
      getTplFiles: function( tplRoot ) {
        return fs.readdirSync( tplRoot ).sort();
      },
      getIndex: function( filename ) {
        var re = /\.md$/;
        return filename.replace( re, "" ).toLowerCase();
      }
    };
  };

  var builder = new Builder( path.resolve( __dirname,  ".." ) );
  builder.run();

}());
