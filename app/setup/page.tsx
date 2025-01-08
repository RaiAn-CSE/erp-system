import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Setup = () => {
  return (
    <Tabs defaultValue="salaryComponent">
      <div className="sticky top-[77px] w-full backdrop-blur-3xl bg-[#ffffff]/80 h-20 pt-5">
        <div className="w-full flex justify-center">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 max-w-7xl">
            <TabsTrigger value="salaryComponent">Salary Component</TabsTrigger>
            <TabsTrigger value="salaryScale">Salary Scale</TabsTrigger>
            <TabsTrigger value="officeShift">Office Shift</TabsTrigger>
            <TabsTrigger value="leaveType">Leave Type</TabsTrigger>
            <TabsTrigger value="employmentStatus">
              Employment Status
            </TabsTrigger>
            <TabsTrigger value="department">Department</TabsTrigger>
            <TabsTrigger value="designation">Designation</TabsTrigger>
            <TabsTrigger value="holiday">Holiday </TabsTrigger>
          </TabsList>
        </div>
        <Separator className="mt-5" />
      </div>

      <TabsContent value="salaryComponent">
        Make changes to your salaryComponent here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>

      <TabsContent value="salaryScale">
        Make changes to your salaryScale here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>

      <TabsContent value="officeShift">
        Make changes to your officeShift here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>

      <TabsContent value="leaveType">
        Make changes to your leaveType here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>

      <TabsContent value="employmentStatus">
        Make changes to your salaryComponent here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>

      <TabsContent value="department">
        Make changes to your salaryScale here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>

      <TabsContent value="designation">
        Make changes to your officeShift here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>

      <TabsContent value="holiday">
        Make changes to your leaveType here.
        <div className="min-h-screen">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quibusdam cum numquam accusantium officia eveniet ullam quae est
            maiores quis, perferendis nihil. Quaerat rem, recusandae laborum
            ullam magni deleniti numquam provident mollitia assumenda quod.
            Impedit ducimus soluta, quidem eaque voluptate quis ea quisquam
            natus officia repellat perspiciatis numquam voluptas aliquid!
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Setup;
