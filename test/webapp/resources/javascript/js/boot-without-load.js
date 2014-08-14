 /**
   * ## Execution
   *
   * No onload, only on demand now
   */
 
  window.executeTests = function(){
    htmlReporter.initialize();
    env.execute();
  };
