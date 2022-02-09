package com.WXSys.entity;

public class Recipe {

    int Pid;
    String Classes;
    int TimeCost;
    String Name;

    public void setClasses(String classes) {
        Classes = classes;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getPid() {
        return Pid;
    }

    public void setPid(int pid) {
        Pid = pid;
    }

    public String getClasses() {
        return Classes;
    }

    public void setClass(String Class) {
        Classes = Class;
    }

    public int getTimeCost() {
        return TimeCost;
    }

    public void setTimeCost(int timeCost) {
        TimeCost = timeCost;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "Pid=" + Pid +
                ", Class='" + Classes + '\'' +
                ", TimeCost=" + TimeCost +
                '}';
    }
}
