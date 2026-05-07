export function handleApiError(error: any) {
  console.error("🚀 Error Log:", error);

  if (error?.isCustom) {
    return Response.json(
      { 
        message: error.message, 
        errorCode: error.errorCode 
      }, 
      { status: error.statusCode }
    );
  }
  return Response.json(
    { 
      message: "ISE", 
      errorCode: "GEN_500" 
    }, 
    { status: 500 }
  );
}