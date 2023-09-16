<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <!-- Home main Banner -->
    <div class="flex items-center justify-center h-[600px] home-bg">
      <div
        class="flex w-full h-full items-center justify-center backdrop-blur-sm"
      >
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white"
        >
          Get back to growth with
          <span class="text-blue-600 dark:text-blue-500">the world's #1</span>
          CRM.
        </h1>
      </div>
    </div>
    <!-- Home secondary Banner -->
    <div
      class="flex justify-center items-center h-[800px] mt-20 container mx-auto"
    >
      <div class="flex w-full h-full items-center justify-center flex-1">
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white"
        >
          Get back to growth with
          <span class="text-blue-600 dark:text-blue-500">the world's #1</span>
          CRM.
        </h1>
      </div>
      <UCard
        class="home-second-banner aspect-square w-[600px] h-[600px] grayscale hover:grayscale-0 transition-all shadow-sm cursor-pointer"
      ></UCard>
    </div>
    <!-- Home secondary Banner -->
    <div class="flex justify-center py-[50px] w-full mt-20 bg-gray-100">
      <div class="w-full h-full flex flex-col container items-center gap-3">
        <h4>Sign up for our newsletter</h4>
        <p class="w-1/2">
          Do you want to get notified when a new component is added to Flowbite?
          Sign up for our newsletter and you will be among the first to find out
          about new features, components, versions, and tools.
        </p>
        <UButton label="Register now" color="emerald" />
      </div>
    </div>
    <!-- Home third Banner -->
    <div
      class="flex justify-center py-[50px] w-full h-[600px] home-third-banner"
    >
      <div
        class="w-full h-full flex flex-col container items-center gap-3 justify-center"
      >
        <h4>Sign up for our newsletter</h4>
        <p class="w-1/2">
          Do you want to get notified when a new component is added to Flowbite?
          Sign up for our newsletter and you will be among the first to find out
          about new features, components, versions, and tools.
        </p>
        <UButton label="Register now" color="emerald" />
      </div>
    </div>
    <!-- Home contact form -->
    <div
      class="flex flex-col justify-center items-center py-10 container mx-auto gap-5"
    >
      <div class="w-1/2 flex flex-col gap-5">
        <h3>Contact me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
      </div>

      <div class="flex shadow-sm overflow-hidden rounded-lg w-2/3">
        <div class="flex flex-col flex-1 bg-blue-950 p-10 text-white">
          <h4>Get In Touch</h4>
          <div class="flex">
            <div>Icon</div>
            <div>hoang.minhtran94@gmail.com</div>
          </div>
        </div>
        <div class="flex-1 p-10 bg-gray-50">
          <form class="flex flex-col gap-3">
            <div class="flex gap-3">
              <UFormGroup class="flex-1" label="Name" required>
                <UInput
                  placeholder="Full name"
                  name="name"
                  icon="i-fluent-person-16-regular"
              /></UFormGroup>
              <UFormGroup class="flex-1" label="Email" required>
                <UInput
                  placeholder="Email"
                  name="email"
                  type="email"
                  icon="i-heroicons-envelope"
              /></UFormGroup>
            </div>
            <UFormGroup label="Subjects" required>
              <UInput
                placeholder="Subjects"
                name="subject"
                icon="i-heroicons-envelope"
            /></UFormGroup>
            <UFormGroup label="Company Name" required>
              <UInput
                name="companyName"
                placeholder="Brand/Company/Product Name"
                icon="i-heroicons-envelope"
            /></UFormGroup>
            <UFormGroup label="Message" required>
              <UTextarea
                color="white"
                placeholder="Tell us about your project..."
                variant="outline"
            /></UFormGroup>
            <UButton class="w-fit" color="sky" variant="solid" label="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
