var Memory_Summary=[{
    Maximum_Capacity: "2048 MBytes", 
    Maximum_Memory_Module_Size:"4096MBytes",
    Memory_Slots:"4",
    Error_Correction:"None",
    DRAM_Frequency:"199.0 MHz",
    Memory_Timings:"3-3-3-8 (CL-RCD-RP-RAS"
    
}]

var Device_Locator=[{
    Manufacturer:"Hyundai Electronics",
    Part_Number:"HYMD264 646D8J-D43",
    Serial_Number:"FFFF7240",
    Capacity:"512MBytes",
    Memory_Type:"DDR(PC3200)",
    Speed:"200 MHz",
    Supported_Frequencies:"133 MHz, 166 MHz, 200MHz",
    Data_Width:"64 bits",
    Manufacturing_Date:"2005 Week 39",
    EPP_SPD_Support:"No",
    XMP_SPD_Support:"No"
}]

console.log(Device_Locator[0].Manufacturer)