package com.example.learningapp.Model;

public class Topic {
    
    private Long id;
    private String title;
    private String abstractt;
    private Long view_count;
    private int difficulity;



    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAbstractt() {
        return this.abstractt;
    }

    public void setAbstractt(String abstractt) {
        this.abstractt = abstractt;
    }

    public Long getView_count() {
        return this.view_count;
    }

    public void setView_count(Long view_count) {
        this.view_count = view_count;
    }

    public int getDifficulity() {
        return this.difficulity;
    }

    public void setDifficulity(int difficulity) {
        this.difficulity = difficulity;
    }


    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", abstractt='" + getAbstractt() + "'" +
            ", view_count='" + getView_count() + "'" +
            ", difficulity='" + getDifficulity() + "'" +
            "}";
    }


}
