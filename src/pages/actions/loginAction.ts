export const loginAction = async ({ request }: { request: any }) => {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return data;
};
