module.exports = function(lib, node)
{
	var attributes = ''
    	if (node.attrs)
        attributes = " "+node.attrs[0].name+"="+node.attrs[0].val.replace(/\'/g,"\"");
 	var contents = node.text
	return '<h2' + attributes + '>' + node.text + '</h2>'
}
