


const scriptsInEvents = {

		async EventSheet2_Event14(runtime, localVars)
		{
			var box = document.getElementById("Box")
			
			box.addEventListener("dragenter", function(event) {
			  runtime.callFunction("DragEnter");
			  },false);
			  
			  box.addEventListener("dragleave", function(event) {
			  runtime.callFunction("DragLeave");
			  },false);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

