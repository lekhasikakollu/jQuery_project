(function(dust){dust.register("allContacts",body_0);function body_0(chk,ctx){return chk.w("<div class=\"contactsForm\"><div class=\"row\"><div class=\"col-md-4\"></div><div class=\"col-md-4\"><input type=\"button\" class=\"btn btn-default\" value=\"Add\" onclick=\"displayForm('{}')\"></div><div class=\"col-md-4\"></div></div><div class=\"row\"><div class=\"col-md-2 text-center\"><strong>First Name</strong></div><div class=\"col-md-2 text-center\"><strong>Last Name</strong></div><div class=\"col-md-2 text-center\"><strong>Email</strong></div><div class=\"col-md-2 text-center\"><strong>Phone</strong></div><div class=\"col-md-2 text-center\"><strong>Work Phone</strong></div><div class=\"col-md-2 text-center\"><strong>Actions</strong></div></div></div>").s(ctx.get(["contactList"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"row\"><div class=\"col-md-2 text-center\" style=\"background-color:whitesmoke;\">").f(ctx.get(["fname"], false),ctx,"h").w("</div><div class=\"col-md-2 text-center\" style=\"background-color:whitesmoke;\">").f(ctx.get(["lname"], false),ctx,"h").w("</div><div class=\"col-md-2 text-center\" style=\"background-color:whitesmoke;\">").f(ctx.get(["email"], false),ctx,"h").w("</div><div class=\"col-md-2\" style=\"background-color:whitesmoke;\">").f(ctx.get(["phone"], false),ctx,"h").w("</div><div class=\"col-md-2 text-center\" style=\"background-color:whitesmoke;\">").f(ctx.get(["wphone"], false),ctx,"h").w("</div><div class=\"col-md-2 text-center\"><input type=\"button\" class=\"btn btn-success\" value=\"Edit\" id=\"edit2\" onclick=\"editContact(").f(ctx.get(["id"], false),ctx,"h").w(");\"> &nbsp; &nbsp;<input type=\"button\" value=\"Delete\" class=\"btn btn-danger\" id=\"delete2\" onclick=\"deleteContact(").f(ctx.get(["id"], false),ctx,"h").w(");\"></div></div>");}body_1.__dustBody=!0;return body_0}(dust));